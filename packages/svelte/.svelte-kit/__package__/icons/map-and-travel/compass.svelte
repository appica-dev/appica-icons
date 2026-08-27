<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m-9 9h2m7 9a9 9 0 0 0 9-9m-9 9v-2m9-7a9 9 0 0 0-9-9m9 9h-2m-7-9v2M8 16l2-6 6-2-2 6z\"/>";
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
