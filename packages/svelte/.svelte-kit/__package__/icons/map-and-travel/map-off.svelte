<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.32 4.34 9 4m0 0 6 3M9 4v1m6 2 6-3v13M15 7v4m3.33 7.335L15 20m0 0-6-3m6 3v-5m-6 2-6 3V7l2.665-1.333M9 17V9M3 3l18 18\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
