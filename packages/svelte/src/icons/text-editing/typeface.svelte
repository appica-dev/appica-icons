<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 17a2 2 0 0 1-2-2V7m0 0h-5a2 2 0 0 0-2 2m7-2-1.764 1.764A13.4 13.4 0 0 0 10 14m-3 3a2.775 2.775 0 0 0 2.632-1.897L10 14m0 0h5M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>";
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
