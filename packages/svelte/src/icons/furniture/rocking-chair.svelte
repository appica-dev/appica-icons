<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 8v6m4-6v6m-8 0h11m-2 0 2 6M4 2l4 12-2 6M6 8h10.5A1.5 1.5 0 0 1 18 9.5M4 18c1.726 2.412 4.665 4 8 4s6.274-1.588 8-4\"/>";
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
