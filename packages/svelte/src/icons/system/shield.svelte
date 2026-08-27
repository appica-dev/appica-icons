<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3a12.03 12.03 0 0 0 8.512 3A11.985 11.985 0 0 1 16.3 18.904 12 12 0 0 1 12 21a12.02 12.02 0 0 1-7.438-5.7A11.99 11.99 0 0 1 3.488 6c3.12.143 6.173-.933 8.512-3\"/>";
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
