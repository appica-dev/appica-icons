<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 18h6v3H9zm0 0a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m0 0h6M9 6V3h6v3m0 0a3 3 0 0 1 3 3v3m1 4v3m0 3v.01\"/>";
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
