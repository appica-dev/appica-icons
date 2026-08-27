<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path stroke-miterlimit=\"10\" d=\"M4.504 16.538c0-5.91 7.458-9.572 7.458-9.572s7.458 3.663 7.458 9.572M10.055 4.907a1.907 1.907 0 1 1 3.814 0 1.907 1.907 0 0 1-3.814 0M19.475 21H4.525A1.525 1.525 0 0 1 3 19.475v-1.526c0-.842.683-1.525 1.525-1.525h14.95c.842 0 1.525.683 1.525 1.525v1.526c0 .842-.683 1.525-1.525 1.525\"/>";
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
