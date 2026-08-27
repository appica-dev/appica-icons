<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.848 14.667 5.5 17.5M12 3v5m0-5a9 9 0 0 1 9 9m-9-9a9 9 0 1 0 9 9m-9-4a4 4 0 0 1 4 4m-4-4a4 4 0 1 0 4 4m0 0h5m-6.781 3.328L17 19.5\"/>";
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
