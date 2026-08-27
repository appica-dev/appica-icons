<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.55 17.733a5.808 5.808 0 0 1-5.819-9.679L9.785 6l7.165 7.165M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M16 16l4 4m0-4-4 4\"/>";
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
