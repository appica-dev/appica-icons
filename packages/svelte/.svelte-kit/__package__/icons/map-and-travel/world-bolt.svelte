<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.985 12.52a9 9 0 1 0-7.52 8.36M3.6 9h16.8M3.6 15h10.9m-3-12a17 17 0 0 0 0 18m1-18c2.313 3.706 3.07 7.856 2.27 12M19 16l-2 3h4l-2 3\"/>";
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
