<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 20.415a7.999 7.999 0 0 0 10.757-9.384A8 8 0 0 0 13 5h-3m0 0 3 3m-3-3 3-3M7 17l4-4-4-4-4 4z\"/>";
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
