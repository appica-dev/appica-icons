<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 11.204V8.278m0 0C12 7.02 11.105 6 10 6S8 7.02 8 8.278V13m4-4.722C12 7.02 12.895 6 14 6s2 1.02 2 2.278V13m2.648 2.254C16.832 17.017 12 16.88 12 16.88a18.3 18.3 0 0 1-3.288-.256q1.69 2.977 8.982 2.475c-1.945 2.013-13.598 5.257-13.668-7.636L4 10.309c0-3.036.023-4.115 1.352-5.633C7.023 2.766 12 3.01 12 3.01s4.977-.243 6.648 1.667C19.977 6.195 20 7.274 20 10.31s-.456 4.074-1.352 4.944\"/>";
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
