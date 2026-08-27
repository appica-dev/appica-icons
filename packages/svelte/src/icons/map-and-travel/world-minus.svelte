<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.483 15.006a9 9 0 1 0-7.958 5.978M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18m1-18a16.94 16.94 0 0 1 2.307 12M16 19h6\"/>";
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
