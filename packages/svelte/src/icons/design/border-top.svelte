<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 4h16M4 7.997v.01m8-.01v.01m8-.01v.01M4 11.996v.01m4-.01v.01m4-.01v.01m4-.01v.01m4-.01v.01M4 15.992v.01m8-.01v.01m8-.01v.01M4 19.99V20m4-.01V20m4-.01V20m4-.01V20m4-.01V20\"/>";
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
