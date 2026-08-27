<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3v17m0-8h9m-9-3h8m-8-3h6m-6 12h6m-6-3h8m-8 6a9 9 0 1 0 .013-17.999A9 9 0 0 0 12 21\"/>";
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
