<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.011 12v.01M9.99 12v.01M12 9.99v.01m0 4.012v.01m-7.542-1.518 8.045-8.045a4.978 4.978 0 0 1 7.04 7.04l-8.046 8.044a4.977 4.977 0 1 1-7.04-7.04\"/>";
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
