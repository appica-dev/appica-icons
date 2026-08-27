<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 15H5.5a2.5 2.5 0 0 1 0-5H6m9 2v6.5a2.5 2.5 0 0 1-5 0V18m2-9h6.5a2.5 2.5 0 0 1 0 5H18m-9-2V5.5a2.5 2.5 0 1 1 5 0V6\"/>";
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
