<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.876 13.61A4 4 0 1 0 11 17h6m-1.934 3.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8m4 0a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17\"/>";
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
