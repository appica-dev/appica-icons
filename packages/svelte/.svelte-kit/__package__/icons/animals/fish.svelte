<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.69 7.44A6.97 6.97 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571M2 9.504c7.715 8.647 14.75 10.265 20 2.498C16.75 4.241 9.715 5.86 2 14.506M18 11v.01m-6.5-.51q-1 1.5 0 3\"/>";
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
