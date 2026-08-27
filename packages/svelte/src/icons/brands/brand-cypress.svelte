<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.48 17.007A9 9 0 1 0 12 21a2.08 2.08 0 0 0 1.974-1.423L17.5 9m-4 0 2 6m-4.736-5.589a3 3 0 1 0-.023 5.19\"/>";
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
