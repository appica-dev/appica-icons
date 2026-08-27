<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 19.5 9 17m0 0-6 3V7l6-3m0 13V4m0 0 6 3m0 0 6-3v9m-6-6v6.5m7 8.5-5-5m0 5 5-5\"/>";
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
