<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.5 12a3 3 0 0 0 0-6H3v12h4.5a3 3 0 0 0 0-6m0 0H3m11 1h7a3.5 3.5 0 1 0-7 0m0 0v2a3.5 3.5 0 0 0 6.64 1M16 6h3\"/>";
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
